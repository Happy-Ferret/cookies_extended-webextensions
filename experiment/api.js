class API extends ExtensionAPI {
    getAPI(context) {
      return {
        cookies: {
          async disableGlobal() {
            this._prefService =
              Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  
            this._prefService.setIntPref("network.cookie.cookieBehavior", 2);
            return "Browser Cookies turned off";
          },
          async enableGlobal() {
            this._prefService =
              Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  
            this._prefService.setIntPref("network.cookie.cookieBehavior", 0);
            return "Browser Cookies turned on";
          }
        }
      };
    }
  }