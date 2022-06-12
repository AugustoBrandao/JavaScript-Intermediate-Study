        import delta from './delta.js'
        import {functionX1} from './xFunctions.js'
        import {functionX2} from './xFunctions.js'


        function calcular(){
            var varA =  window.document.getElementById('a')
            var varB =  window.document.getElementById('b')
            var varC =  window.document.getElementById('c')

            var delt = window.document.getElementById('delta')
            var x1 = window.document.getElementById('x1')
            var x2 = window.document.getElementById('x2')

            var a = Number(varA.value)
            var b = Number(varB.value)
            var c = Number(varC.value)

            var d = delta(a,b,c)
            var varx1 = Number(functionX1(a,b,d))
            var varx2 = functionX2(a,b,d)
            
            delt.innerHTML = `${d}`
            x1.innerHTML = `${varx1}`
            x2.innerHTML = `${varx2}`
        }

