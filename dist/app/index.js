System.registerDynamic("app/login/login.component.js",["@angular/core","@angular/router-deprecated","angularfire2","../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router-deprecated"),h=a("angularfire2"),i=a("../user.service"),j=function(){function a(a,b,c){this.router=a,this.af=b,this.user=c,null!=b.auth.getAuth()&&a.navigate(["Files"]),b.auth.subscribe(function(b){b&&null!=b.google&&(c.googleToken=b.google.accessToken,c.googleAvatar=b.google.profileImageURL,a.navigate(["Files"]))})}return a.prototype.login=function(){if(this.af.auth.login({provider:h.AuthProviders.Google,method:h.AuthMethods.Popup,scope:["https://www.googleapis.com/auth/drive"]}),this.af.auth.getAuth()){var a=this.af.auth.getAuth();this.user.googleToken=a.google.accessToken,this.user.googleAvatar=a.google.profileImageURL}},a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"login-form",templateUrl:"login.component.html",styleUrls:["login.component.css"]}),e("design:paramtypes",[g.Router,h.AngularFire,i.UserService])],a)}();return b.LoginComponent=j,c.exports}),System.registerDynamic("app/actionbar/actionbar.component.js",["@angular/core","../user.service","angularfire2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../user.service"),h=a("angularfire2"),i=function(){function a(a,b){this.auth=a,this.user=b}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"slothbox-actionbar",templateUrl:"actionbar.component.html",styleUrls:["actionbar.component.css"]}),e("design:paramtypes",[h.FirebaseAuth,g.UserService])],a)}();return b.ActionbarComponent=i,c.exports}),System.registerDynamic("app/file-uploader/file-select-uploader.directive.js",["@angular/core","./file-uploader.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./file-uploader.service"),h=function(){function a(a){var b=this;this.el=a,this.onUpload=new f.EventEmitter,this.uploader=new g.FileUploaderService,setTimeout(function(){b.uploader.setOptions(b.options)}),this.uploader._emitter.subscribe(function(a){b.onUpload.emit(a)})}return a.prototype.onFiles=function(){var a=this.el.nativeElement.files;a.length&&this.uploader.addFilesToQueue(a)},a=d([f.Directive({selector:"[FileSelectUploader]",inputs:["options: FileSelectUploader"],outputs:["onUpload"]}),e("design:paramtypes",[f.ElementRef])],a)}();return b.FileSelectUploader=h,c.exports}),System.registerDynamic("app/file-uploader/file-uploader.service.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(a,b,c){this.id=a,this.originalName=b,this.size=c,this.progress={loaded:0,total:0,percent:0},this.done=!1,this.error=!1,this.abort=!1}return a.prototype.setProgres=function(a){this.progress=a},a.prototype.setError=function(){this.error=!0,this.done=!0},a.prototype.setAbort=function(){this.abort=!0,this.done=!0},a.prototype.onFinished=function(a,b,c){this.status=a,this.statusText=b,this.response=c,this.done=!0},a}(),h=function(){function a(){this.cors=!1,this.withCredentials=!1,this.multiple=!1,this.maxUploads=3,this.allowedExtensions=[],this.maxSize=!1,this.data={},this.noParams=!0,this.autoUpload=!0,this.multipart=!0,this.method="POST",this.debug=!1,this.customHeaders={},this.encodeHeaders=!0,this.authTokenPrefix="Bearer",this.authToken=void 0,this.fieldName="file",this._queue=[],this._emitter=new f.EventEmitter(!0)}return a.prototype.setOptions=function(a){this.url=null!=a.url?a.url:this.url,this.cors=null!=a.cors?a.cors:this.cors,this.withCredentials=null!=a.withCredentials?a.withCredentials:this.withCredentials,this.multiple=null!=a.multiple?a.multiple:this.multiple,this.maxUploads=null!=a.maxUploads?a.maxUploads:this.maxUploads,this.allowedExtensions=null!=a.allowedExtensions?a.allowedExtensions:this.allowedExtensions,this.maxSize=null!=a.maxSize?a.maxSize:this.maxSize,this.data=null!=a.data?a.data:this.data,this.noParams=null!=a.noParams?a.noParams:this.noParams,this.autoUpload=null!=a.autoUpload?a.autoUpload:this.autoUpload,this.multipart=null!=a.multipart?a.multipart:this.multipart,this.method=null!=a.method?a.method:this.method,this.debug=null!=a.debug?a.debug:this.debug,this.customHeaders=null!=a.customHeaders?a.customHeaders:this.customHeaders,this.encodeHeaders=null!=a.encodeHeaders?a.encodeHeaders:this.encodeHeaders,this.authTokenPrefix=null!=a.authTokenPrefix?a.authTokenPrefix:this.authTokenPrefix,this.authToken=null!=a.authToken?a.authToken:this.authToken,this.fieldName=null!=a.fieldName?a.fieldName:this.fieldName,this.multiple||(this.maxUploads=1)},a.prototype.uploadFilesInQueue=function(){var a=this,b=this._queue.filter(function(a){return!a.uploading});b.forEach(function(b){a.uploadFile(b)})},a.prototype.uploadFile=function(a){var b=this,c=new XMLHttpRequest,d=new FormData;d.append(this.fieldName,a,a.name);var e=new g(this.generateRandomIndex(),a.name,a.size),f=this._queue.indexOf(a);c.upload.onprogress=function(a){if(a.lengthComputable){var c=Math.round(a.loaded/a.total*100);e.setProgres({total:a.total,loaded:a.loaded,percent:c}),b._emitter.emit(e)}},c.upload.onabort=function(a){e.setAbort(),b._emitter.emit(e)},c.upload.onerror=function(a){e.setError(),b._emitter.emit(e)},c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(e.onFinished(c.status,c.statusText,c.response),b.removeFileFromQueue(f),b._emitter.emit(e))},c.open(this.method,this.url,!0),c.withCredentials=this.withCredentials,this.customHeaders&&Object.keys(this.customHeaders).forEach(function(a){c.setRequestHeader(a,b.customHeaders[a])}),this.authToken&&c.setRequestHeader("Authorization",this.authTokenPrefix+" "+this.authToken),c.send(d)},a.prototype.addFilesToQueue=function(a){for(var b=0,c=a;b<c.length;b++){var d=c[b];this.isFile(d)&&!this.inQueue(d)&&this._queue.push(d)}this.autoUpload&&this.uploadFilesInQueue()},a.prototype.removeFileFromQueue=function(a){this._queue.splice(a,1)},a.prototype.clearQueue=function(){this._queue=[]},a.prototype.getQueueSize=function(){return this._queue.length},a.prototype.inQueue=function(a){var b=this._queue.filter(function(b){return b===a});return!!b.length},a.prototype.isFile=function(a){return null!==a&&(a instanceof Blob||a.name&&a.size)},a.prototype.log=function(a){this.debug&&console.log("[Ng2Uploader]:",a)},a.prototype.generateRandomIndex=function(){return Math.random().toString(36).substring(7)},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.FileUploaderService=h,c.exports}),System.registerDynamic("app/file-uploader/file-drop-uploader.directive.js",["@angular/core","./file-uploader.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./file-uploader.service"),h=function(){function a(a){var b=this;this.el=a,this.onUpload=new f.EventEmitter,this.uploader=new g.FileUploaderService,setTimeout(function(){b.uploader.setOptions(b.options)}),this.uploader._emitter.subscribe(function(a){b.onUpload.emit(a)}),this.initEvents()}return a.prototype.initEvents=function(){var a=this;this.el.nativeElement.addEventListener("drop",function(b){b.stopPropagation(),b.preventDefault();var c=b.dataTransfer,d=c.files;d.length&&a.uploader.addFilesToQueue(d)},!1),this.el.nativeElement.addEventListener("dragenter",function(a){a.stopPropagation(),a.preventDefault()},!1),this.el.nativeElement.addEventListener("dragover",function(a){a.stopPropagation(),a.preventDefault()},!1)},a=d([f.Directive({selector:"[FileDropUploader]",inputs:["options: FileDropUploader"],outputs:["onUpload"]}),e("design:paramtypes",[f.ElementRef])],a)}();return b.FileDropUploader=h,c.exports}),System.registerDynamic("app/file-uploader/file-uploader.component.js",["./file-uploader.service","./file-select-uploader.directive","./file-drop-uploader.directive"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}var e=a("./file-uploader.service"),f=a("./file-select-uploader.directive"),g=a("./file-drop-uploader.directive");return d(a("./file-uploader.service")),d(a("./file-select-uploader.directive")),d(a("./file-drop-uploader.directive")),Object.defineProperty(b,"__esModule",{value:!0}),b["default"]={directives:[f.FileSelectUploader,g.FileDropUploader],providers:[e.FileUploaderService]},b.UPLOAD_DIRECTIVES=[f.FileSelectUploader,g.FileDropUploader],c.exports}),System.registerDynamic("app/file-upload/file-upload.component.js",["@angular/core","@angular/common","angularfire2","../file-uploader/file-uploader.component","../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("angularfire2"),i=a("../file-uploader/file-uploader.component"),j=a("../user.service"),k=function(){function a(a,b,c,d){this.el=a,this.renderer=b,this.af=c,this.user=d,this.uploadProgress=0,this.fileUploadResponse=[],this.zone=new f.NgZone({enableLongStackTrace:!1}),this.options={authToken:d.googleToken,withCredentials:!0,url:"https://www.googleapis.com/upload/drive/v3/files?uploadType=media"},this.classMap={droparea:!0,"droparea-hidden":!0};var e=this;this.dragOverListener=b.listenGlobal("document","dragover",function(a){var b=a.originalEvent.dataTransfer;null!=b.types&&(b.types.indexOf?-1!=b.types.indexOf("Files"):b.types.contains("application/x-moz-file"))&&(e.classMap["droparea-hidden"]=!1,window.clearTimeout(e.dragTimer))}),this.dragLeaveListener=b.listenGlobal("document","dragleave",function(a){e.dragTimer=window.setTimeout(function(){e.classMap["droparea-hidden"]=!0},25)})}return a.prototype.handleDropUpload=function(a){var b=this,c=this.fileUploadResponse.findIndex(function(b){return b.id===a.id});-1===c?this.fileUploadResponse.push(a):this.zone.run(function(){b.fileUploadResponse[c]=a});var d=0,e=0;this.fileUploadResponse.forEach(function(a){d+=a.progress.total,e+=a.progress.loaded}),this.uploadProgress=Math.floor(e/(d/100))},a=d([f.Component({moduleId:c.id,selector:"file-upload-box",templateUrl:"file-upload.component.html",styleUrls:["file-upload.component.css"],directives:[i.UPLOAD_DIRECTIVES,g.NgClass]}),e("design:paramtypes",[f.ElementRef,f.Renderer,h.AngularFire,j.UserService])],a)}();return b.FileUploadComponent=k,c.exports}),System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/sidebar/sidebar.component.js",["@angular/core","@angular/router-deprecated","@angular/http","../environment","angularfire2","../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router-deprecated"),h=a("@angular/http"),i=a("../environment"),j=a("angularfire2"),k=a("../user.service"),l=function(){function a(a,b,c,d){this.router=a,this.af=b,this.user=c,this.http=d,this.redirectURL=i.environment.production?"https://westcoastbestcoast.2016.angularattack.io/files/":"http://localhost:4200/files/"}return a.prototype.ngOnInit=function(){},a.prototype.logout=function(){this.af.auth.logout(),this.user.logout(),this.router.navigate(["Login"])},a.prototype.accessDropbox=function(){if(""==this.user.dropboxToken)var a=window.open("https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=jbqssj52us3hsh2&redirect_uri="+this.redirectURL,"Authorize Dropbox","width=800, height=600"),b=this,c=window.setInterval(function(){try{if(-1!=a.document.URL.indexOf(b.redirectURL)){window.clearInterval(c);var d=a.document.URL,e=b.gup(d,"access_token"),f=(b.gup(d,"token_type"),b.gup(d,"uid"));a.close(),b.user.dropboxToken=e,b.user.dropboxUID=f,console.log({acToken:e,uid:f})}}catch(g){}},100);else console.log({token:this.user.dropboxToken})},a.prototype.gup=function(a,b){b=b.replace(/[[]/,"[").replace(/[]]/,"]");var c="[#&]"+b+"=([^&#]*)",d=new RegExp(c),e=d.exec(a);return null==e?"":e[1]},a=d([f.Component({moduleId:c.id,selector:"slothbox-sidebar",templateUrl:"sidebar.component.html",styleUrls:["sidebar.component.css"],directives:[g.ROUTER_DIRECTIVES],providers:[h.HTTP_BINDINGS]}),e("design:paramtypes",[g.Router,j.AngularFire,k.UserService,h.Http])],a)}();return b.SidebarComponent=l,c.exports}),System.registerDynamic("app/filebrowser/filebrowser.component.js",["@angular/core","@angular/router-deprecated","angularfire2","../file-upload/file-upload.component","../sidebar/sidebar.component","@angular/http","../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router-deprecated"),h=a("angularfire2"),i=a("../file-upload/file-upload.component"),j=a("../sidebar/sidebar.component"),k=a("@angular/http"),l=a("../user.service"),m=function(){function a(a,b,c,d){this.router=a,this.af=b,this.http=c,this.user=d,this.dropboxFilesURL="https://content.dropboxapi.com/1/files/auto/",this.googleDriveFilesURL="https://www.googleapis.com/drive/v3/files",null==b.auth.getAuth()&&a.navigate(["Login"]);var e=new k.Headers({Authorization:"Bearer "+d.googleToken});this.googleDriveFiles=c.get(this.googleDriveFilesURL,{headers:e}).subscribe(function(a){return a}),console.log(this.googleDriveFiles)}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"slothbox-filebrowser",templateUrl:"filebrowser.component.html",styleUrls:["filebrowser.component.css"],directives:[g.ROUTER_DIRECTIVES,i.FileUploadComponent,j.SidebarComponent],providers:[k.HTTP_PROVIDERS]}),e("design:paramtypes",[g.Router,h.AngularFire,k.Http,l.UserService])],a)}();return b.FilebrowserComponent=m,c.exports}),System.registerDynamic("app/slothbox.component.js",["@angular/core","@angular/router-deprecated","angularfire2","./login/login.component","./sidebar/sidebar.component","./actionbar/actionbar.component","./filebrowser/filebrowser.component","./user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}},g=a("@angular/core"),h=a("@angular/router-deprecated"),i=a("angularfire2"),j=a("./login/login.component"),k=a("./sidebar/sidebar.component"),l=a("./actionbar/actionbar.component"),m=a("./filebrowser/filebrowser.component"),n=a("./user.service"),o=function(){function a(a,b,c,d){if(this.af=a,this.auth=b,this.router=c,this.user=d,this.title="nimbus",this.welcome="Welcome to nimbus the all in one cloud storage manager!",null!=a.auth.getAuth()){var e=a.auth.getAuth().google;d.googleToken=e.accessToken,d.googleAvatar=e.profileImageURL}}return a=d([g.Component({moduleId:c.id,selector:"slothbox-app",templateUrl:"slothbox.component.html",styleUrls:["slothbox.component.css"],directives:[h.ROUTER_DIRECTIVES,l.ActionbarComponent,k.SidebarComponent,m.FilebrowserComponent],providers:[h.ROUTER_PROVIDERS]}),h.RouteConfig([{path:"/login",name:"Login",component:j.LoginComponent,useAsDefault:!0},{path:"/files",name:"Files",component:m.FilebrowserComponent}]),f(1,g.Inject(i.FirebaseAuth)),e("design:paramtypes",[i.AngularFire,i.FirebaseAuth,h.Router,n.UserService])],a)}();return b.SlothboxAppComponent=o,c.exports}),System.registerDynamic("app/user.service.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){this.googleToken="",this.dropboxToken="",this.dropboxUID="",this.googleAvatar="https://placehold.it/32/32"}return a.prototype.logout=function(){this.googleToken="",this.dropboxToken="",this.googleAvatar="https://placehold.it/32/32"},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.UserService=g,c.exports}),System.registerDynamic("app/index.js",["./environment","./slothbox.component","./user.service"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./slothbox.component");b.SlothboxAppComponent=e.SlothboxAppComponent;var f=a("./user.service");return b.UserService=f.UserService,c.exports});