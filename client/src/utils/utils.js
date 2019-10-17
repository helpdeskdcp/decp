/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5da8a428536a7405722c9298
*
* You will get 10% discount for each one of your friends
* 
*/
export default class Utils {
  // Prepare bindActionCreators
  static convertClassToFnArray(myClass) {
    var myClassInst = new myClass();
    var myFnNames = Object.getOwnPropertyNames(myClass.prototype);
    var result = {};

    for (let i in myFnNames) {
      result[myFnNames[i]] = myClassInst[myFnNames[i]];
    }
    return result;
  }

  // Manage change
  static handleChange(model, event) {
    const key = event.target.id;
    const value = event.target.value;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change checkbock
  static handleChangeCheck(model, key, event) {
    const value = event.target.checked;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change select
  static handleChangeSelect(model, event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value
      }
    });
  }

  // Manage change date
  static handleChangeDate(model, key, value) {
    this.setState(...this.state, {
      [model]: {
        ...this.state[model],
        [key]: value.getTime()
      }
    });
  }
}
