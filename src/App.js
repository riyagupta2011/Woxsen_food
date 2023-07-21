import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import omelete from "./assets/omelete.jpg"
import pancake from "./assets/pancake.jpg"
import toast from "./assets/toast.jpg"
import sandwich from "./assets/sandwich.jpg"
import salad from "./assets/salad.jpg"
import burger from "./assets/burger.jpg"
import pizza from "./assets/pizza.jpg"
import sushi from "./assets/sushi.jpg"
import steak from "./assets/steak.jpg"
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  margin: 20px;
  text-align: center;
`;

const StyledImage = styled('img')`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const breakfastFoods = [
  { name: 'Omelette', image: omelete , availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']},
  { name: 'Pancakes', image: pancake, availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  { name: 'Toast', image: toast, availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] }
];

const lunchFoods = [
  { name: 'Sandwich', image: sandwich, availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  { name: 'Salad', image: salad, availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  { name: 'Burger', image: burger, availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] }
];

const dinnerFoods = [
  { name: 'Steak', image: steak,availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
  { name: 'Pizza', image: pizza,availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']  },
  { name: 'Sushi', image: sushi,availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']  }
];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function App() {
  const [selectedMeal, setSelectedMeal] = useState('');
  const [showFoods, setShowFoods] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleMealButtonClick = (meal) => {
    setSelectedMeal(meal);
    setSelectedFood(null); // Reset selectedFood when selecting a new meal
    setShowFoods(true); // Show the food items when a meal is selected
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const getFoodsForSelectedMeal = () => {
    switch (selectedMeal) {
      case 'breakfast':
        return breakfastFoods;
      case 'lunch':
        return lunchFoods;
      case 'dinner':
        return dinnerFoods;
      default:
        return [];
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Select a meal:</h2>
      {!showFoods && (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={() => handleMealButtonClick('breakfast')}
            >
              Breakfast
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleMealButtonClick('lunch')}
            >
              Lunch
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleMealButtonClick('dinner')}
            >
              Dinner
            </Button>
          </Grid>
        </Grid>
      )}

      {showFoods && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Selected {selectedMeal} Foods:</h2>
          <Grid container justifyContent="center" spacing={2}>
            {getFoodsForSelectedMeal().map((food, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard onClick={() => handleFoodClick(food)}>
                  <StyledImage src={food.image} alt={food.name} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {food.name}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {selectedFood && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Selected Food:</h2>
          <StyledImage
            src={selectedFood.image}
            alt={selectedFood.name}
            style={{ width: '300px', height: '200px' }}
          />
          <Typography variant="h5">{selectedFood.name}</Typography>
        </div>
      )}
    </div>
  );
}

export default App;