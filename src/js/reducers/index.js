import { SAVE_LEVEL, LOAD_ACCESS_LEVELS, SET_ID, GET_ID} from "../constants/action-types";
import { READERS, READER_TYPES } from "../constants/readers";
import accessLevels from '../../data/accessLevels.json';
const accessLevelsMap = accessLevels.map(function(val, index) { 
  let reader = READERS.find(obj => obj.id == val.readerId);
  let type = READER_TYPES.find(obj => obj.id == reader.typeId);
  val.readerName = reader.name;
  val.readerType = type.name;
  return val; 
});
const initialJson = accessLevels[0];
const initialState = {
  accessLevels: accessLevelsMap,
  currentId: 1,
  currentLevel: initialJson,
  readers: READERS,
  readerTypes: READER_TYPES
};

function rootReducer(state = initialState, action) {
  if (action.type === SAVE_LEVEL) {
    let formValues = action.payload; 
    let reader = '';
    let type = '';

    const AccessLevelArray = state.accessLevels.map(function(val, index) { 
      if (val.id == formValues.id) {
        val.name = formValues.name;
        val.Description = formValues.Description;
        val.readerId = formValues.readerId;
        reader = READERS.find(obj => obj.id == val.readerId);
        type = READER_TYPES.find(obj => obj.id == reader.typeId);
        val.readerName = reader.name;
        val.readerType = type.name;
      }
      return val;
    });
   
    return Object.assign({}, state, {
     accessLevels: AccessLevelArray
    });
  }
 
  if (action.type === LOAD_ACCESS_LEVELS) {
    return Object.assign({}, state, {
      accessLevels: state.accessLevels.concat(action.payload)
    });
  }
  if (action.type === SET_ID) {
    let indexVal = 0;
    let newJson = state.accessLevels.map(function(val, index){ 
      if (val.id == action.payload) {
        indexVal = index;
      }
    })

    newJson = state.accessLevels[indexVal];
    return Object.assign({}, state, {
      currentId: action.payload,
      currentLevel: newJson
    });
  }
  if (action.type === GET_ID) {
    return Object.assign({}, state, {
    });
  }
  return state;
}

export default rootReducer;