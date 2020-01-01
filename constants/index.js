const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const DEFAULT_MEALS_IN_A_DAY = {
  breakfast: 'Breakfast',
  midMorning: 'Mid morning',
  lunch: 'Lunch',
  afternoon: 'Afternoon',
  dinner: 'Dinner',
};

const IMAGES_PATH = '/images/';

const ACTIVE_MODIFIER = '-active';

const OPTIONS_TITLE_CLASS = 'options-title';

const SEARCH_OPTIONS = {
  DIET: 'diet',
  PLAN: 'plan',
  INTOLERANCES: 'intolerances',
};

const ROUTES = {
  MEALPLAN: '/mealplan',
};

const BUTTON_STYLE = {
  CREATE: {
    TYPE: 'submit',
    TEXT: 'create mealplan',
    DIV: 'button-create-div-container',
    CLASS: 'button-create',
  },
  REDIRECT: {
    TYPE: 'submit',
    CLASS: 'landing-redirect-button',
  },
  CREDENTIAL: {
    ID: 'credentials-button',
    VARIANT: 'primary',
    TYPE: 'submit',
  },
};

const LANDING_STYLE = {
  CONTAINER: 'landing',
  LEFT_CONTAINER: 'landing-left-container',
  RIGHT_CONTAINER: 'landing-right-container',
  RIGHT_CONTAINER_LOGO: 'landing-right-logo',
};

const TEXT = {
  ALREADY_REGISTERED: 'Already registered? Click ',
  NOT_REGISTERED: 'Not yet registered? Click ',
  TO_LOG_IN: ' to log in.',
  TO_REGISTER: ' to register.',
  HERE: 'here',
  REGISTER: 'Register',
  LOGIN: 'Login',
  LABEL_ACCEPT_TERMS:
    "By clicking here I accept Easymeals' terms and conditions.",
  PLACEHOLDER_PASSWORD: 'Password',
  PLACEHOLDER_EMAIL: 'Enter email',
  EMAIL_ADDRESS: 'Email address',
  PASSWORD: 'Password',
  EASYMEALS: 'Easymeals',
  MEALPLAN: 'Mealplan',
  MY_PROFILE: 'My Profile',
  LOGOUT: 'Logout',
  PROFILE: 'Profile',
};

const FONT_AWESOME = {
  REL: 'stylesheet',
  HREF: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
  INTEGRITY:
    'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz',
  CROSS_ORIGIN: 'anonymous',
};

const INPUT_TYPES = {
  PASSWORD: 'password',
  EMAIL: 'email',
  CHECKBOX: 'checkbox',
};

const CONTROL_ID = {
  FORM_EMAIL: 'formEmail',
  FORM_PASSWORD: 'formPassword',
  FORM_BASIC_CHECKBOX: 'formBasicCheckbox',
};

const CONTAINER_STYLE = {
  HOME: 'home',
  FOOTER: 'footer',
  MODAL: 'modal',
};

const NAVIGATION_BAR = {
  BG: 'light',
  EXPAND: 'lg',
  BRAND_HREF: '#home',
  TOGGLE_ARIA_CONTROLS: 'basic-navbar-nav',
  COLLAPSE_ID: 'basic-navbar-nav',
  NAV_CLASS: 'mr-auto',
  LINK_HREF: '#link',
  DROPDOWN_ID: 'basic-nav-dropdown',
  DROWDOWN_HREF_ITEM_1: '#action/3.1',
  DROPDOWN_DIVIDER_HREF_ITEM_1: '#action/3.4',
};

// TODO: GET SECTIONS FROM BACKEND
const SECTION_OPTIONS = [
  {
    title: 'Choose a diet',
    containerClass: 'options-container',
    sectionClass: 'select-option',
    id: 'diet',
    options: [
      {
        imgFile: 'vegan.png',
        alt: 'vegan',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'vegan',
        inputType: 'radio',
        name: 'diet',
      },
      {
        imgFile: 'vegetarian.png',
        id: 'vegetarian',
        alt: 'vegetarian',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        inputType: 'radio',
        name: 'diet',
      },
      {
        imgFile: 'pescatarian.png',
        alt: 'pescatarian',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'pescatarian',
        inputType: 'radio',
        name: 'diet',
      },
      {
        imgFile: 'flexitarian.png',
        alt: 'flexitarian',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'flexitarian',
        inputType: 'radio',
        name: 'diet',
      },
    ],
  },
  {
    title: 'Choose a plan',
    containerClass: 'options-container',
    sectionClass: 'select-option',
    id: 'plan',
    options: [
      {
        imgFile: 'balanced.png',
        alt: 'balanced',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'balanced',
        inputType: 'radio',
        name: 'plan',
      },
      {
        imgFile: 'diet.png',
        alt: 'diet',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'diet',
        inputType: 'radio',
        name: 'plan',
      },
    ],
  },
  {
    title: 'Select intolerance',
    containerClass: 'options-container-color',
    sectionClass: 'select-option',
    id: 'intolerances',
    options: [
      {
        imgFile: 'lactose.png',
        alt: 'lactose',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'lactose',
        inputType: 'checkbox',
        name: 'intolerances',
      },
      {
        imgFile: 'gluten.png',
        alt: 'gluten',
        imgClass: 'home-select-option-img',
        divImgClass: 'home-image-container',
        id: 'gluten',
        inputType: 'checkbox',
        name: 'intolerances',
      },
    ],
  },
];

// TODO: MOVE SEARCH TEMPLATES TO BACKEND
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
  data,
  DAYS,
  DEFAULT_MEALS_IN_A_DAY,
  SECTION_OPTIONS,
  IMAGES_PATH,
  ACTIVE_MODIFIER,
  OPTIONS_TITLE_CLASS,
  SEARCH_OPTIONS,
  ROUTES,
  BUTTON_STYLE,
  CONTAINER_STYLE,
  LANDING_STYLE,
  TEXT,
  INPUT_TYPES,
  CONTROL_ID,
  NAVIGATION_BAR,
  FONT_AWESOME,
};
