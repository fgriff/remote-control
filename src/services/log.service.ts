const printSuccess = (commandName: string) => {
  console.log(`${commandName} successfully done`);
};

const printMouseNav = (commandName: string, coordOne: number, coordTwo?: number) => {
  const result = coordTwo ? `${commandName} ${coordOne} ${coordTwo}` : `${commandName} ${coordOne}`;
  console.log(result);
};

export { printMouseNav, printSuccess };
