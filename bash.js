//Output a prompt
process.stdout.write("prompt > ");

//the stdin 'data' event fires after a user types in
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newLine

  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  } else {
    process.stdout.write("You typed: " + cmd); //output after user hits enter
    process.stdout.write("\nprompt > "); //outot after user hits enter
  }
});
