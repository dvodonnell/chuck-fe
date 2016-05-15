export default {

    define : function(config) {

        return (function(_config){

            var App = function(innerConfig) {

                this.runtimeConfig = innerConfig;

                this._container = [];

            };

            App.prototype = {

                service : _config.service,
                source : _config.source,
                store : _config.store,
                config : _config.config || {},

                renderer : _config.renderer,
                runner : _config.runner,

                _validateConfig : function(config) {

                },

                _parseConfig : function(config) {


                },

                _instantiate : function() {



                },

                _buildAppPayload : function() {
                    return {
                        store : this.store,
                        service : this.service,
                        source : this.source,
                        config : this.config
                    }
                },

                render : function() {
                    for (var i = 0; i < this._container.length; i++) {
                        this.renderer(this._buildAppPayload(), this._container[i]);
                    }
                },

                renderStatic : function() {
                    return this.renderer(this._buildAppPayload(), null, true);
                },

                mount : function(el) {
                    this._container.push(el);
                },

                run : function(initialState) {
                    this.runner(this._buildAppPayload(), initialState);
                }

            };

            return App;

        })(config);

    }

};