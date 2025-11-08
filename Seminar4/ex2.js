/*implementați următoarea structură de tipuri.
Software este un tip care are metoda 'run'.
Browser moștenește Software și poate adăuga și instala Plugin.
Un Browser poate avea multiple Plugin.*/

class Software {
    run() {
        console.log('Software is running');
    }
}

class Plugin {
    constructor(name) {
        this.name = name;
    }

    install() {
        console.log(`Plugin ${this.name} has been installed`);
    }
}

class Browser extends Software {
    constructor() {
        super();
        this.plugins = []; 
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
        plugin.install();
        console.log(`Plugin ${plugin.name} added to browser`);
    }

    listPlugins() {
        console.log('Installed plugins:');
        this.plugins.forEach(plugin => console.log(plugin.name));
    }
}


const browser = new Browser();
browser.run(); 

const adBlockPlugin = new Plugin('AdBlock');
const darkModePlugin = new Plugin('Dark Mode');

browser.addPlugin(adBlockPlugin);
browser.addPlugin(darkModePlugin);
browser.listPlugins();