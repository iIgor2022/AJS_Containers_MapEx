const defaultSettings = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

const allowedSettingsValues = {
  theme: ['dark', 'light', 'gray'],
  music: ['trance', 'rock', 'pop', 'chillout', 'off'],
  difficulty: ['easy', 'hard', 'normal', 'nightmare'],
};

export default class Settings {
  constructor(...installableSettings) {
    this.userSettings = new Map();
    installableSettings.forEach((element) => {
      const elementKey = Object.keys(element)[0];
      if (allowedSettingsValues[elementKey] !== undefined) {
        if (allowedSettingsValues[elementKey].includes(element[elementKey])) {
          this.userSettings.set(elementKey, element[elementKey]);
        } else {
          throw new Error(`Wrong value of settings ${element[elementKey]}`);
        }
      } else {
        throw new Error(`Wrong key of settings ${elementKey}`);
      }
    });
  }

  get settings() {
    return new Map([...defaultSettings, ...this.userSettings]);
  }
}
