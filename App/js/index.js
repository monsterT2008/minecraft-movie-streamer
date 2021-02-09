// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setDirtyMark(false)
                .setLeft("23.61904761904762em")
                .setTop("38.095238095238095em")
                .setWidth("13.638095238095238em")
                .setHeight("4.3428571428571425em")
                .setCaption("Log in")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("48.76190476190476em")
                .setTop("6.857142857142857em")
                .setWidth("0.1523809523809524em")
                .setHeight("0.45714285714285713em")
                .setCaption("")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("15.238095238095237em")
                .setTop("31.238095238095237em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password:")
                .setType("password")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});