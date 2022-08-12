import createFamilyTree from './index.js'

createFamilyTree(
  {
    fullName: "Marisol Gates",
    relation: "grandmother",
  },
  {
    fullName: "Ina Haynes",
    relation: "sibling",
  },
  {
    fullName: "Mavis Fields",
    relation: "grandfather",
  },
  {
    fullName: "Randall Bush",
    relation: "father",
  },
  {
    fullName: "Teri Hooper",
    relation: "mother",
  },
  {
    fullName: "Ginger Warren",
    relation: "grandfather",
  },
  {
    fullName: "Maria Carlson",
    relation: "sibling",
  },
  {
    fullName: "Liz Bishop",
    relation: "grandmother",
  }
);

createFamilyTree(
  {
    fullName: "Wilkerson Mcknight",
    relation: "grandfather",
  },
  {
    fullName: "Dunlap Sawyer",
    relation: "sibling",
  },
  {
    fullName: "Matthews Joyner",
    relation: "father",
  },
  {
    fullName: "Maryellen Hardin",
    relation: "sibling",
  },
  {
    fullName: "Frieda Johns",
    relation: "sibling",
  },
  {
    fullName: "Latasha Terrell",
    relation: "grandmother",
  },
  {
    fullName: "Holmes Steele",
    relation: "sibling",
  },
  {
    fullName: "Waters Fowler",
    relation: "grandfather",
  },
  {
    fullName: "Raquel Christian",
    relation: "grandmother",
  },
  {
    fullName: "Darcy Osborn",
    relation: "mother",
  }
);


// Add the function content and paremeters
// This function will have unknown number of parameters
// The function will receive users that have different position in a family
// Each user can be a grandparent, a parent or a sibling
// The function will spread all paremeters into three groups and return the following object

/* 
   {
       grandParents: [ *** here will be grandmother or grandfather *** ],
       parents: [ *** here will be mother or father *** ],
       siblings: [ *** here will be all the rest *** ]
   }
*/

// YOU CAN CHANGE THE FOLLOWING FUNCTION
// DON'T CHANGE THE FUNCTION NAME
// ONLY ITS CONTENT AND PARAMETERS
const createFamilyTree = function () {
    
}


export default createFamilyTree
