xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":true,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label6")
                .setLeft("23.333333333333332em")
                .setTop("5.833333333333333em")
                .setCaption("Label"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("15em")
                .setTop("14.166666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password Input")
                .setType("password")
                .setValue("pwd"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setLeft("22.5em")
                .setTop("21.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Currency Input")
                .setType("currency"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list2")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .setLeft("5.833333333333333em")
                .setTop("20.833333333333332em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setValue("a"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.StatusButtons")
                .setHost(host,"xui_ui_statusbuttons1")
                .setItems([
                    {
                        "id":"a",
                        "caption":"status 1"
                    },
                    {
                        "id":"b",
                        "caption":"status 2"
                    },
                    {
                        "id":"c",
                        "caption":"status 3"
                    },
                    {
                        "id":"d",
                        "caption":"status 4"
                    }
                ])
                .setLeft("40.833333333333336em")
                .setTop("4.166666666666667em")
                .setWidth("30em")
                .setHeight("4em")
                .setBorderType("none")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setLabelHAlign("left")
                .setItemMargin("2px 4px")
                .setItemWidth("4em")
                .setValue("a"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.DatePicker")
                .setHost(host,"xui_ui_datepicker1")
                .setLeft("3.3333333333333335em")
                .setTop("0.8333333333333334em")
                .setValue(new Date(2019,4,14,0,0,0,0)),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});