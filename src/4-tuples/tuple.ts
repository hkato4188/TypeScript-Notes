const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//switching the order of elements can break the data model
//type alias of Drink 
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 50]
//annotations on type and order make this a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

