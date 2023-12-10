const cars = [
    {cars: '1972 Corvette', sexy: true},
    {cars: '1966 Mustang', sexy: true},
    {cars: 'Ford trucks after 1966', sexy: false},
    {cars: 'Electric muscle cars', sexy: false},
    {cars: "Big trucks with a 4 cylinder (I'm looking at you chevy)", sexy: false},
    {cars: 'Tesla Cybertruck', sexy: true},
];

module.exports = {
    getAll: function() {
        return cars;
    }
};
