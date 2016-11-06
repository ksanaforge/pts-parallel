const React=require("react");
const E=React.createElement;
const PT=React.PropTypes;
const CorpusBindingMode=require("ksana2015-parallel").CorpusBindingMode;
const remotedata=require("./remotedata");
const counterParts=[
	{label:"元亨南傳",corpus:"nanchuan"},
	{label:"PTS Pali",corpus:"pts"},
	{label:"PTS English",corpus:"pts_english"}
]
var options={leftCorpus:"pts",nav:["article","toc"]
,rightCorpus:"nanchuan",remotedata
,alignpage:"pts",counterParts};

const maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  },
  render: function() {
    return E(CorpusBindingMode,options);
  }
});
module.exports=maincomponent;