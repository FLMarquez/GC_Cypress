# Rutas de la KB (todos los directorios a verificar)
$kbPaths = @(
    "C:\Models\SGTFARO17U5\SGTFARO17U5.gxw",
    "C:\Models\SGTFARO17U5\GX_KB_SGTFARO17U5.mdf",
    "C:\Models\SGTFARO17U5\GX_KB_SGTFARO17U5_log.ldf",
    "C:\Models\SGTFARO17U5\Locks",
    "C:\Models\SGTFARO17U5\FTIndex",
    "C:\Models\SGTFARO17U5\IndexLocks"
)

# Obtener la fecha y hora actual
$lastCheck = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

while ($true) {
    $hasChanges = $false

    # Verificar si los archivos han cambiado en todas las rutas especificadas
    foreach ($path in $kbPaths) {
        # Verificar si el directorio existe
        if (Test-Path $path) {
            # Recorrer todos los archivos en el directorio y subdirectorios
            Get-ChildItem -Recurse -Path $path | ForEach-Object {
                $fileDate = $_.LastWriteTime
                $fileDateFormatted = $fileDate.ToString("yyyy-MM-dd HH:mm:ss")
                Write-Host "Verificando archivo: $($_.FullName) con fecha: $fileDateFormatted"
                Write-Host "Última comprobación: $lastCheck"

                # Comparar la fecha del archivo con la última comprobación
                if ($fileDate -gt [datetime]$lastCheck) {
                    Write-Host "¡Archivo modificado!"
                    $hasChanges = $true
                }
            }
        } else {
            Write-Host "El directorio no existe: $path"
        }
    }

    # Si se detectan cambios, ejecutar el archivo .bat
    if ($hasChanges) {
        Write-Host "Se detectaron cambios a las $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        # Ejecutar el archivo .bat
        Start-Process "C:\Users\Lmarquez\Desktop\GodoyCuz_Cypress\test_cmd_telegram_allure.bat"
    } else {
        Write-Host "Sin cambios a las $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }

    # Actualizar la última verificación
    $lastCheck = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

    # Esperar 5 minutos antes de verificar nuevamente
    Start-Sleep -Seconds 300
}
