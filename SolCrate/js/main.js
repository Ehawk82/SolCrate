// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.voiceCommand) {
            // TODO: Handle relevant ActivationKinds. For example, if your app can be started by voice commands,
            // this is a good place to decide whether to populate an input field or choose a different initial view.
        }
        else if (args.detail.kind === activation.ActivationKind.launch) {
            // A Launch activation happens when the user launches your app via the tile
            // or invokes a toast notification by clicking or tapping on the body.
            if (args.detail.arguments) {
                // TODO: If the app supports toasts, use this value from the toast payload to determine where in the app
                // to take the user in response to them invoking a toast notification.
            }
            else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
                // TODO: This application had been suspended and was then terminated to reclaim memory.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
                // Note: You may want to record the time when the app was last suspended and only restore state if they've returned after a short period.
            }
        }

        if (!args.detail.prelaunchActivated) {
            // TODO: If prelaunchActivated were true, it would mean the app was prelaunched in the background as an optimization.
            // In that case it would be suspended shortly thereafter.
            // Any long-running operations (like expensive network or disk I/O) or changes to user state which occur at launch
            // should be done here (to avoid doing them in the prelaunch case).
            // Alternatively, this work can be done in a resume or visibilitychanged handler.
        }

        if (isFirstActivation) {
            // TODO: The app was activated and had not been running. Do general startup initialization here.
            document.addEventListener("visibilitychange", onVisibilityChanged);
            args.setPromise(WinJS.UI.processAll());
            ApplicationView.preferredLaunchWindowingMode = ApplicationViewWindowingMode.fullScreen;
        }

        isFirstActivation = false;
    };

    function onVisibilityChanged(args) {
        if (!document.hidden) {
            // TODO: The app just became visible. This may be a good time to refresh the view.
        }
    }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };
    var UI, uData, bData, pData;

    pData = {
        output: 0,
        dayOutput: 0,
        monthOutput: 0,
        annualOutput: 0
    };

    bData = {
        level: 0,
        cap: 12.83
    };

    uData = {
        trophy: 0,
        dayEnergy: 0,
        dayRating: 0,
        monthEnergy: 0,
        monthRating: 0,
        energy: 0,
        rating: 0
    };

    UI = {
        /* return functions */
        createEle: (x) => { return document.createElement(x); },
        bySel: (x) => { return document.querySelector(x); },
        bySelAll: (x) => { return document.querySelectorAll(x); },
        /* Main Program Startup and LocalStorage initializing stuffs */
        init: () => {
            var uDta = localStorage.getItem("uData");
            if (!uDta || uDta === null) {
                localStorage.setItem("uData", JSON.stringify(uData));
            }
            var bDta = localStorage.getItem("bData");
            if (!bDta || bDta === null) {
                localStorage.setItem("bData", JSON.stringify(bData));
            }
            var pDta = localStorage.getItem("pData");
            if (!pDta || pDta === null) {
                localStorage.setItem("pData", JSON.stringify(pData));
            }
            //testing 
            //var xx = localStorage.getItem("uData");
            //if (xx) {
                //var xxx = JSON.parse(xx);
	            
            //}
            //console.log(xxx.dayRating);

        },
        startup: () => {
            UI.init();
            UI.doTheStuffs();
            
        },
        /* program things and beyond! */
        doTheStuffs: () => {
            var hd, elem1, elem2, elem3, myThing1, myThing2, myThing3, sett,
	            uData = localStorage.getItem("uData"),
                bData = localStorage.getItem("bData"),
                pData = localStorage.getItem("pData");

            if (uData) {
                var uuu = JSON.parse(uData);
            }

            if (bData) {
                var bbb = JSON.parse(bData);
            }

            if (pData) {
                var ppp = JSON.parse(pData);
            }

            myThing1 = "<h5>System Statistic</h5><hr />";
            myThing1 += "<p>Total Energy: <span>" + uuu.energy + "</span></p>";
            myThing1 += "<p>Monthly Energy: <span>" + uuu.monthEnergy + "</span></p>";
            myThing1 += "<p>Monthly Energy Rating: <span>" + uuu.monthRating + "</span></p>";
            myThing1 += "<p>Daily Energy: <span>" + uuu.dayEnergy + "</span></p>";
            myThing1 += "<p>Daily Energy Rating: <span>" + uuu.dayRating + "</span></p>";
            myThing1 += "<p>Trophies: <span>" + uuu.trophy + "</span></p>";

            myThing2 = "<h5>Panel Feedback</h5><hr />";
            myThing2 += "<p>Current Output: <span>" + ppp.output + "</span></p>";
            myThing2 += "<p>Daily Average: <span>" + ppp.dayOutput + "</span></p>";
            myThing2 += "<p>Monthly Average: <span>" + ppp.monthOutput + "</span></p>";
            myThing2 += "<p>Annual Average: <span>" + ppp.annualOutput + "</span></p>";
            myThing2 += "<p>&nbsp; <span>&nbsp;</span></p>";
            myThing2 += "<p>&nbsp; <span>&nbsp;</span></p>";

            myThing3 = "<h5>Battery Bank</h5><hr />";
            myThing3 += "<p>Current Battery Level: <span>" + bbb.level + "</span></p>";
            myThing3 += "<p>Storage Capacity: <span>" + bbb.cap + " Volts</span></p>";
            myThing3 += "<p>&nbsp; <span>&nbsp;</span></p>";
            myThing3 += "<p>&nbsp; <span>&nbsp;</span></p>";
            myThing3 += "<p>&nbsp; <span>&nbsp;</span></p>";
            myThing3 += "<p>&nbsp; <span>&nbsp;</span></p>";

            hd = UI.createEle("h1");
            hd.innerHTML = "SolCrate";

            sett = UI.createEle("div");
            sett.className = "settBtn";
            sett.onclick = UI.settingsPage(sett);
            sett.innerHTML = "⚙";

            elem1 = UI.createEle("div");
            elem1.className = "elems";
            elem1.innerHTML = myThing1;

            elem2 = UI.createEle("div");
            elem2.className = "elems";
            elem2.innerHTML = myThing2;

            elem3 = UI.createEle("div");
            elem3.className = "elems";
            elem3.innerHTML = myThing3;

            dvContain.appendChild(hd);
            dvContain.appendChild(sett);
            dvContain.appendChild(elem3);
            dvContain.appendChild(elem2);
            dvContain.appendChild(elem1);
        },
        settingsPage: (sett) => {
            return () => {
                sett.className = "settBtn_step";

                var settPage = UI.createEle("div"),
                    hd = UI.createEle("h1"),
                    closeBtn = UI.createEle("div"),
                    lsClear = UI.createEle("div");

                hd.innerHTML = "Settings";

                closeBtn.innerHTML = "❌";
                closeBtn.className = "closeBtn";
                closeBtn.onclick = UI.closeSettPage(settPage, sett);

                lsClear.innerHTML = "Clear App Storage";
                lsClear.className = "lsClear";
                lsClear.onclick = UI.clearLS;

                settPage.className = "settPage";
                settPage.appendChild(hd);
                settPage.appendChild(closeBtn);
                settPage.appendChild(lsClear);

                dvContain.appendChild(settPage);

                setTimeout(() => {

                    settPage.className = "settPage_full";
                   
                }, 100);
            }
        },
        closeSettPage: (settPage, sett) => {
            return () => {
                settPage.className = "settPage";
                sett.className = "settBtn";

                setTimeout(() => {
                    
                    settPage.remove();
                    console.log(dvContain);
                }, 1100);
                
            }
        },
        clearLS: () => {
            localStorage.clear();
            location.reload();
        }
	};
    /* startup and global priority settings */
	window.onload = () => {

	    UI.startup();
	    //localStorage.clear();
    }
	app.start();

})();
