(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(e,a,t){"use strict";t.r(a);var r={name:"ModuleBadge",props:{repo:{type:String},module:{type:String,required:!0},package:{type:String},layout:{type:String,default:"for-the-badge"},label:{type:String}},computed:{url(){var e;const a=new URL("https://img.shields.io/github/package-json/v/equinor/fusion-framework");return a.searchParams.set("filename",`packages/${this.module}/package.json`),a.searchParams.set("style",this.layout),a.searchParams.set("label",null!==(e=this.label)&&void 0!==e?e:this.packageName),a.toString()},packageName(){var e;return null!==(e=this.package)&&void 0!==e?e:"@equinor/fusion-framework-"+this.module},npmUrl(){return"https://www.npmjs.com/package/"+this.packageName}}},s=t(10),n=Object(s.a)(r,(function(){var e=this._self._c;return e("a",{attrs:{href:this.npmUrl,target:"npm"}},[e("img",{attrs:{alt:"GitHub package.json version (subfolder of monorepo)",src:this.url}})])}),[],!1,null,null,null);a.default=n.exports}}]);