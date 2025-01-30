/*
1. La función interna mantiene acceso a 'contador' incluso después
   de que la función externa haya terminado
2. Cada vez que llamamos a incrementar(), accede a la misma variable contador
3. El resultado será:
   1
   2
   3
   4