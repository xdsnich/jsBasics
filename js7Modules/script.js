import initTabs from "./tabs.js";
import initSelectors from "./sliders.js";
import { initModals } from "./modals.js";

//IMPORTING JS MODULES AND CALLING FUNCTIONS AT THE ENTRY POINT

import * as consts from "./constants.js";

//HERE IMPORTING ALL OBJECTS FROM JS

initTabs();
initSelectors();
initModals();

consts.default();
