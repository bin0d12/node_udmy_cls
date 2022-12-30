// initialization
// using var
var initializationVar = 10
// using let
let initializationLet = 20;
// using const
const initializationConst = 30;

// Declaration
// using var
var declarationVar;
declarationVar = 40;
// using let
let declarationLet;
declarationLet = 50;
// using const
const declarationConst;  //'const' declarations must be initialized.

// Rendering
// using var
var renderingVar;
  renderingVar = 60;
// using let
let renderingLet;
 renderingLet = 70;
// using const
const renderingConst; //'const' declarations must be initialized.
//   renderingConst = 80;


// shadowing
// using var
  var shadowingVar = 80;
  var shadowingVar = 90;
// using let
 let shadowingLet = 100;
 let shadowingLet = 110;  // Cannot redeclare block-scoped variable 'shadowingLet'.
// using const
 const shadowingConst = 120;
 const shadowingConst = 130; //Cannot redeclare block-scoped variable 'shadowingConst'.

 
