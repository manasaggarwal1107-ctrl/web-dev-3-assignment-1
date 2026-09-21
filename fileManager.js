const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }
  console.log("File Created");

  console.log("Reading File");
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log(data);

    fs.appendFile(fileName, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }
      console.log("File Updated");

      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        console.log(data);

        fs.unlink(fileName, (err) => {
          if (err) {
            console.log("Error deleting file:", err);
            return;
          }
          console.log("File Deleted");
        });
      });
    });
  });
});
