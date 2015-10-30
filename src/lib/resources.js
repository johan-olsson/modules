
Resources = window.Resources || new Function();

(function() {

    var apps = {};

    this.isApp = function(name) {
        return (!!apps[name])
    }

    this.add = function(name, moduleName, module) {
        apps[name].modules[moduleName] = module;
    }
    
    this.newApp = function(name, object, dependencies) {
        apps[name] = {
            dependencies: dependencies,
            object: object,
            modules: {}
        }
    }
    
    this.getApp = function(app) {
        return apps[app].object
    }

    this.getDependencies = function(module, dependencies) {

        dependencies.forEach(function(injection, index) {
            apps[module].dependencies.forEach(function(dependency) {

                if (apps[dependency].modules[injection])
                    dependencies[index] = apps[dependency].modules[injection];
            })
        })
        return dependencies;
    }
    
}.call(Resources.prototype));
