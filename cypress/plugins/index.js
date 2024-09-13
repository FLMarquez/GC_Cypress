const pandoc = require('pandoc-bin');
const { exec } = require('child_process');

module.exports = (on, config) => {
  on('task', {
    convertHtmlToPdf({ input, output }) {
      return new Promise((resolve, reject) => {
        const cmd = `${pandoc} ${input} -o ${output}`;
        exec(cmd, (error, stdout, stderr) => {
          if (error) {
            return reject(error);
          }
          resolve();
        });
      });
    }
  });
};
