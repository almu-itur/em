const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const DEFAULT_MEALS_IN_A_DAY = {
  breakfast: 'Breakfast',
  midMorning: 'Mid morning',
  lunch: 'Lunch',
  afternoon: 'Afternoon',
  dinner: 'Dinner',
};

const OPTION_SECTIONS = [
  {
    title: 'Choose a diet',
    sectionClass: 'selectDiet',
    id: 'selectDiet',
    options: [{
      imgFile: 'vegan.png',
      alt: 'vegan',
      imgClass: 'selectDiet-img',
      id: 'vegan',
      inputType: 'radio',
      name: 'diet',
    },
    {
      imgFile: 'vegetarian.png',
      id: 'vegetarian',
      alt: 'vegetarian',
      imgClass: 'selectDiet-img',
      inputType: 'radio',
      name: 'diet',
    },
    {
      imgFile: 'pescatarian.png',
      alt: 'pescatarian',
      imgClass: 'selectDiet-img',
      id: 'pescatarian',
      inputType: 'radio',
      name: 'diet',
    },
    {
      imgFile: 'flexitarian.png',
      alt: 'flexitarian',
      imgClass: 'selectDiet-img',
      id: 'flexitarian',
      inputType: 'radio',
      name: 'diet',
    }],
  },
  {
    title: 'Choose a plan',
    sectionClass: 'selectPlan',
    id: 'selectPlan',
    options: [
      {
        imgFile: 'balanced-text-light.png',
        alt: 'balanced',
        imgClass: 'selectPlan-img',
        id: 'balanced',
        inputType: 'radio',
        name: 'plan',
      },
      {
        imgFile: 'diet-text-light.png',
        alt: 'diet',
        imgClass: 'selectPlan-img',
        id: 'diet',
        inputType: 'radio',
        name: 'plan',
      },
      {
        imgFile: 'custom-text-light.png',
        alt: 'custom',
        imgClass: 'selectPlan-img',
        id: 'custom',
        inputType: 'radio',
        name: 'plan',
      },
    ],
  },
  {
    title: 'Select intolerance',
    sectionClass: 'selectIntolerance',
    id: 'selectIntolerance',
    options: [
      {
        imgFile: 'lactose.png',
        alt: 'lactose',
        imgClass: 'selectPlan-img',
        id: 'lactose',
        inputType: 'checkbox',
        name: 'intolerances',
      },
      {
        imgFile: 'gluten.png',
        alt: 'gluten',
        imgClass: 'selectPlan-img',
        id: 'gluten',
        inputType: 'checkbox',
        name: 'intolerances',
      },
    ],
  },
];

const data = {

  selectPlan(plan) {
    const mealPlan = [];

    switch (plan) {
      case 'balanced':

        let monday = [
          { day: 'monday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'breakfast', search: { category: 'milk', subcategory: 'none', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'lunch', search: { category: 'vegetable', subcategory: 'none', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nuts', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'dinner', search: { category: 'salad', subcategory: 'none', isSpecialMeal: false } },
          { day: 'monday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false } }];
        let tuesday = [
          { day: 'tuesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false } },
          { day: 'tuesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false } },
          { day: 'tuesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
          { day: 'tuesday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
          { day: 'tuesday', mealTime: 'lunch', search: { category: 'legume', subcategory: 'none', isSpecialMeal: false } },
          { day: 'tuesday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          {
            day: 'tuesday',
            mealTime: 'dinner',
            search: {
              category: 'soup', subcategory: 'none', isCold: false, isSpecialMeal: false,
            },
          },
          { day: 'tuesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false } }];
        let wednesday = [
          { day: 'wednesday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'breakfast', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'midMorning', search: { category: 'pastisserie', subcategory: 'pastry', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'lunch', search: { category: 'vegetable', subcategory: 'none', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'dinner', search: { category: 'salad', subcategory: 'none', isSpecialMeal: false } },
          { day: 'wednesday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'meat', isSpecialMeal: false } }];
        let thursday = [
          { day: 'thursday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: false } },
          { day: 'thursday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          { day: 'thursday', mealTime: 'breakfast', search: { category: 'milk', subcategory: 'none', isSpecialMeal: false } },
          { day: 'thursday', mealTime: 'midMorning', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } },
          { day: 'thursday', mealTime: 'lunch', search: { category: 'legume', subcategory: 'none', isSpecialMeal: false } },
          { day: 'thursday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          {
            day: 'thursday',
            mealTime: 'dinner',
            search: {
              category: 'soup', subcategory: 'none', isCold: false, isSpecialMeal: false,
            },
          },
          { day: 'thursday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'fish', isSpecialMeal: false } }];
        let friday = [
          { day: 'friday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'flake', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'breakfast', search: { category: 'milk', subcategory: 'none', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'midMorning', search: { category: 'snack', subcategory: 'panini', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'lunch', search: { category: 'vegetable', subcategory: 'none', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'afternoon', search: { category: 'snack', subcategory: 'nuts', isSpecialMeal: false } },
          { day: 'friday', mealTime: 'dinner', search: { category: 'carb', subcategory: 'pizza', isSpecialMeal: false } }];
        let saturday = [
          { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'pancake' } },
          { day: 'saturday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'milkshake', isSpecialMeal: false } },
          { day: 'saturday', mealTime: 'lunch', search: { category: 'carb', subcategory: 'rice', isSpecialMeal: true } },
          { day: 'saturday', mealTime: 'lunch', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          { day: 'saturday', mealTime: 'dinner', search: { category: 'protein', subcategory: 'egg', isSpecialMeal: false } }];
        let sunday = [
          { day: 'sunday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isSpecialMeal: true } },
          { day: 'sunday', mealTime: 'breakfast', search: { category: 'fruit', subcategory: 'juice', isSpecialMeal: false } },
          { day: 'sunday', mealTime: 'lunch', search: { category: 'protein', subcategory: 'none', isSpecialMeal: true } },
          { day: 'sunday', mealTime: 'lunch', search: { category: 'pastisserie', subcategory: 'cake', isSpecialMeal: true } },
          { day: 'sunday', mealTime: 'dinner', search: { category: 'salad', subcategory: 'none', isSpecialMeal: false } },
          { day: 'sunday', mealTime: 'dinner', search: { category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false } }];


        mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

        break;

      case 'diet':

        monday = [
          {
            day: 'monday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'monday',
            mealTime: 'breakfast',
            search: {
              category: 'milk', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'monday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'monday',
            mealTime: 'midMorning',
            search: {
              category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'monday',
            mealTime: 'lunch',
            search: {
              category: 'vegetable', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          { day: 'monday', mealTime: 'afternoon', search: { category: 'fruit', subcategory: 'fruit', isSpecialMeal: false } },
          {
            day: 'monday',
            mealTime: 'dinner',
            search: {
              category: 'salad', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'monday',
            mealTime: 'dinner',
            search: {
              category: 'protein', subcategory: 'meat', isSpecialMeal: false, isLight: true,
            },
          }];
        tuesday = [
          {
            day: 'tuesday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'toast', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'juice', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'breakfast',
            search: {
              category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'midMorning',
            search: {
              category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'lunch',
            search: {
              category: 'legume', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'afternoon',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'dinner',
            search: {
              category: 'soup', subcategory: 'none', isCold: false, isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'tuesday',
            mealTime: 'dinner',
            search: {
              category: 'protein', subcategory: 'fish', isSpecialMeal: false, isLight: true,
            },
          }];
        wednesday = [
          {
            day: 'wednesday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'breakfast',
            search: {
              category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'midMorning',
            search: {
              category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'lunch',
            search: {
              category: 'vegetable', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'afternoon',
            search: {
              category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'dinner',
            search: {
              category: 'salad', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'wednesday',
            mealTime: 'dinner',
            search: {
              category: 'protein', subcategory: 'meat', isSpecialMeal: false, isLight: true,
            },
          }];
        thursday = [
          {
            day: 'thursday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'toast', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'breakfast',
            search: {
              category: 'milk', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'midMorning',
            search: {
              category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'lunch',
            search: {
              category: 'legume', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'afternoon',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'dinner',
            search: {
              category: 'soup', subcategory: 'none', isCold: false, isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'thursday',
            mealTime: 'dinner',
            search: {
              category: 'protein', subcategory: 'fish', isSpecialMeal: false, isLight: true,
            },
          }];
        friday = [
          {
            day: 'friday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'flake', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'breakfast',
            search: {
              category: 'milk', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'midMorning',
            search: {
              category: 'snack', subcategory: 'panini', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'lunch',
            search: {
              category: 'vegetable', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'afternoon',
            search: {
              category: 'snack', subcategory: 'nuts', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'friday',
            mealTime: 'dinner',
            search: {
              category: 'carb', subcategory: 'pizza', isSpecialMeal: false, isLight: true,
            },
          }];
        saturday = [
          { day: 'saturday', mealTime: 'breakfast', search: { category: 'carb', subcategory: 'toast', isLight: true } },
          {
            day: 'saturday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'milkshake', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'saturday',
            mealTime: 'lunch',
            search: {
              category: 'soup', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'saturday',
            mealTime: 'lunch',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'saturday',
            mealTime: 'dinner',
            search: {
              category: 'protein', subcategory: 'egg', isSpecialMeal: false, isLight: true,
            },
          }];
        sunday = [
          {
            day: 'sunday',
            mealTime: 'breakfast',
            search: {
              category: 'carb', subcategory: 'toast', isSpecialMeal: true, isLight: true,
            },
          },
          {
            day: 'sunday',
            mealTime: 'breakfast',
            search: {
              category: 'fruit', subcategory: 'juice', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'sunday',
            mealTime: 'lunch',
            search: {
              category: 'protein', subcategory: 'meat', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'sunday',
            mealTime: 'lunch',
            search: {
              category: 'fruit', subcategory: 'fruit', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'sunday',
            mealTime: 'dinner',
            search: {
              category: 'salad', subcategory: 'none', isSpecialMeal: false, isLight: true,
            },
          },
          {
            day: 'sunday',
            mealTime: 'dinner',
            search: {
              category: 'dairy', subcategory: 'yoghurt', isSpecialMeal: false, isLight: true,
            },
          }];

        mealPlan.push(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    }
    return mealPlan;
  },
};

export {
  data, DAYS, DEFAULT_MEALS_IN_A_DAY, OPTION_SECTIONS,
};
