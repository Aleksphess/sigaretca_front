/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function($,undefined){$.ui=$.ui||{};if($.ui.version){return}$.extend($.ui,{version:"1.8.13",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});$.fn.extend({_focus:$.fn.focus,focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem)}},delay)}):this._focus.apply(this,arguments)},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1))}).eq(0)}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1))}).eq(0)}return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex)}if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value}}elem=elem.parent()}}return 0},disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.curCSS(elem,"padding"+this,true))||0;if(border){size-=parseFloat($.curCSS(elem,"border"+this+"Width",true))||0}if(margin){size-=parseFloat($.curCSS(elem,"margin"+this,true))||0}});return size}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this)}return this.each(function(){$(this).css(type,reduce(this,size)+"px")})};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size)}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px")})}});function focusable(element,isTabIndexNotNaN){var nodeName=element.nodeName.toLowerCase();if("area"===nodeName){var map=element.parentNode,mapName=map.name,img;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false}img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img)}return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"==nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element)}function visible(element){return!$(element).parents().andSelf().filter(function(){return $.curCSS(this,"visibility")==="hidden"||$.expr.filters.hidden(this)}).length}$.extend($.expr[":"],{data:function(elem,i,match){return!!$.data(elem,match[3])},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")))},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}});$(function(){var body=document.body,div=body.appendChild(div=document.createElement("div"));$.extend(div.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});$.support.minHeight=div.offsetHeight===100;$.support.selectstart="onselectstart"in div;body.removeChild(div).style.display="none"});$.extend($.ui,{plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode){return}for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args)}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false}var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true}el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size))},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width)}})})(jQuery);(function($,undefined){if($.cleanData){var _cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){$(elem).triggerHandler("remove")}_cleanData(elems)}}else{var _remove=$.fn.remove;$.fn.remove=function(selector,keepData){return this.each(function(){if(!keepData){if(!selector||$.filter(selector,[this]).length){$("*",this).add([this]).each(function(){$(this).triggerHandler("remove")})}}return _remove.call($(this),selector,keepData)})}}$.widget=function(name,base,prototype){var namespace=name.split(".")[0],fullName;name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget}$.expr[":"][fullName]=function(elem){return!!$.data(elem,name)};$[namespace]=$[namespace]||{};$[namespace][name]=function(options,element){if(arguments.length){this._createWidget(options,element)}};var basePrototype=new base();basePrototype.options=$.extend(true,{},basePrototype.options);$[namespace][name].prototype=$.extend(true,basePrototype,{namespace:namespace,widgetName:name,widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix||name,widgetBaseClass:fullName},prototype);$.widget.bridge(name,$[namespace][name])};$.widget.bridge=function(name,object){$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=Array.prototype.slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.extend.apply(null,[true,options].concat(args)):options;if(isMethodCall&&options.charAt(0)==="_"){return returnValue}if(isMethodCall){this.each(function(){var instance=$.data(this,name),methodValue=instance&&$.isFunction(instance[options])?instance[options].apply(instance,args):instance;if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue;return false}})}else{this.each(function(){var instance=$.data(this,name);if(instance){instance.option(options||{})._init()}else{$.data(this,name,new object(options,this))}})}return returnValue}};$.Widget=function(options,element){if(arguments.length){this._createWidget(options,element)}};$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(options,element){$.data(element,this.widgetName,this);this.element=$(element);this.options=$.extend(true,{},this.options,this._getCreateOptions(),options);var self=this;this.element.bind("remove."+this.widgetName,function(){self.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(key,value){var options=key;if(arguments.length===0){return $.extend({},this.options)}if(typeof key==="string"){if(value===undefined){return this.options[key]}options={};options[key]=value}this._setOptions(options);return this},_setOptions:function(options){var self=this;$.each(options,function(key,value){self._setOption(key,value)});return this},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget()[value?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",value)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(type,event,data){var callback=this.options[type];event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();data=data||{};if(event.originalEvent){for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop]}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented())}}})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mousedown(function(e){mouseHandled=false});$.widget("ui.mouse",{options:{cancel:':input,option',distance:1,delay:0},_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event)}).bind('click.'+this.widgetName,function(event){if(true===$.data(event.target,self.widgetName+'.preventClickEvent')){$.removeData(event.target,self.widgetName+'.preventClickEvent');event.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName)},_mouseDown:function(event){if(mouseHandled){return};(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true}}if(true===$.data(event.target,this.widgetName+'.preventClickEvent')){$.removeData(event.target,this.widgetName+'.preventClickEvent')}this._mouseMoveDelegate=function(event){return self._mouseMove(event)};this._mouseUpDelegate=function(event){return self._mouseUp(event)};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true},_mouseMove:function(event){if($.browser.msie&&!(document.documentMode>=9)&&!event.button){return this._mouseUp(event)}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event))}return!this._mouseStarted},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target==this._mouseDownEvent.target){$.data(event.target,this.widgetName+'.preventClickEvent',true)}this._mouseStop(event)}return false},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance)},_mouseDelayMet:function(event){return this.mouseDelayMet},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true}})})(jQuery);(function($,undefined){var numPages=5;$.widget("ui.slider",$.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var self=this,o=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",handleCount=(o.values&&o.values.length)||1,handles=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(o.disabled?" ui-slider-disabled ui-disabled":""));this.range=$([]);if(o.range){if(o.range===true){if(!o.values){o.values=[this._valueMin(),this._valueMin()]}if(o.values.length&&o.values.length!==2){o.values=[o.values[0],o.values[0]]}}this.range=$("<div></div>").appendTo(this.element).addClass("ui-slider-range"+" ui-widget-header"+((o.range==="min"||o.range==="max")?" ui-slider-range-"+o.range:""))}for(var i=existingHandles.length;i<handleCount;i+=1){handles.push(handle)}this.handles=existingHandles.add($(handles.join("")).appendTo(self.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(event){event.preventDefault()}).hover(function(){if(!o.disabled){$(this).addClass("ui-state-hover")}},function(){$(this).removeClass("ui-state-hover")}).focus(function(){if(!o.disabled){$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");$(this).addClass("ui-state-focus")}else{$(this).blur()}}).blur(function(){$(this).removeClass("ui-state-focus")});this.handles.each(function(i){$(this).data("index.ui-slider-handle",i)});this.handles.keydown(function(event){var ret=true,index=$(this).data("index.ui-slider-handle"),allowed,curVal,newVal,step;if(self.options.disabled){return}switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:ret=false;if(!self._keySliding){self._keySliding=true;$(this).addClass("ui-state-active");allowed=self._start(event,index);if(allowed===false){return}}break}step=self.options.step;if(self.options.values&&self.options.values.length){curVal=newVal=self.values(index)}else{curVal=newVal=self.value()}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=self._valueMin();break;case $.ui.keyCode.END:newVal=self._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=self._trimAlignValue(curVal+((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=self._trimAlignValue(curVal-((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===self._valueMax()){return}newVal=self._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===self._valueMin()){return}newVal=self._trimAlignValue(curVal-step);break}self._slide(event,index,newVal);return ret}).keyup(function(event){var index=$(this).data("index.ui-slider-handle");if(self._keySliding){self._keySliding=false;self._stop(event,index);self._change(event,index);$(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-slider-disabled"+" ui-widget"+" ui-widget-content"+" ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(event){var o=this.options,position,normValue,distance,closestHandle,self,index,allowed,offset,mouseOverHandle;if(o.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;self=this;this.handles.each(function(i){var thisDistance=Math.abs(normValue-self.values(i));if(distance>thisDistance){distance=thisDistance;closestHandle=$(this);index=i}});if(o.range===true&&this.values(1)===o.min){index+=1;closestHandle=$(this.handles[index])}allowed=this._start(event,index);if(allowed===false){return false}this._mouseSliding=true;self._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-(closestHandle.height()/2)-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue)}this._animateOff=true;return true},_mouseStart:function(event){return true},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1}if(percentMouse<0){percentMouse=0}if(this.orientation==="vertical"){percentMouse=1-percentMouse}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse)},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}return this._trigger("start",event,uiHash)},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if((this.options.values.length===2&&this.options.range===true)&&((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))){newVal=otherVal}if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true)}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal)}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}this._trigger("stop",event,uiHash)},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}this._trigger("change",event,uiHash)}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return}return this._value()},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(index)}else{return this.value()}}}else{return this._values()}},_setOption:function(key,value){var i,valsLength=0;if($.isArray(this.options.values)){valsLength=this.options.values.length}$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"disabled":if(value){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i)}this._animateOff=false;break}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val}else{vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i])}return vals}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin()}if(val>=this._valueMax()){return this._valueMax()}var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step;alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step)}return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var oRange=this.options.range,o=this.options,self=this,animate=(!this._animateOff)?o.animate:false,valPercent,_set={},lastValPercent,value,valueMin,valueMax;if(this.options.values&&this.options.values.length){this.handles.each(function(i,j){valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(self.options.range===true){if(self.orientation==="horizontal"){if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate)}if(i===1){self.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate})}}else{if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate)}if(i===1){self.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate})}}}lastValPercent=valPercent})}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate)}if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:false,duration:o.animate})}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate)}if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:false,duration:o.animate})}}}});$.extend($.ui.slider,{version:"1.8.13"})}(jQuery));/**
 * Created by valerii on 31.01.2018.
 */
