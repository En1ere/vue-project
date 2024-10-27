import {snakeSettings} from "./settings.ts";

const defaultField = {
    width: 10,
    height: 60
}

export const settings = new snakeSettings(defaultField, "easy", false, 10, false).getSettings();