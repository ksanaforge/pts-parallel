const React=require("react");
const E=React.createElement;
const PT=React.PropTypes;
const CorpusMappingMode=require("ksana2015-parallel").CorpusMappingMode;
var options={leftCorpus:"pts",rightCorpus:"nanchuan"};

const maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  },
  render: function() {
    return E(CorpusMappingMode,options);
  }
});
module.exports=maincomponent;