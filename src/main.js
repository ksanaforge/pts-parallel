const React=require("react");
const E=React.createElement;
const PT=React.PropTypes;
const CorpusBindingMode=require("ksana2015-parallel").CorpusBindingMode;
const remotedata=require("./remotedata");

var options={leftCorpus:"pts",nav:["article","toc"]
,rightCorpus:"nanchuan",remotedata,alignpage:"pts"};

const maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  },
  render: function() {
    return E(CorpusBindingMode,options);
  }
});
module.exports=maincomponent;