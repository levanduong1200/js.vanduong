class Human{
    species = 'human';

    }
  class Preson extends Human{
      name = 'van duong';
      printName = () =>{
          console.log(this.name);
      }
  }
  const preson = new Preson();
  preson.printName;
  console.log(preson.species);


