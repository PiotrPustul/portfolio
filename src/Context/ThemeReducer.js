const themeReducer = (state, action) => {
   switch (action.type) {
      case 'DARK':
         return state = action.mode;
      case 'LIGHT':
         return state = action.mode;
      default:
         break;
   }
};

export default themeReducer;