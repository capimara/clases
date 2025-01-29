let mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip \"Hank\" McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Alexander Summers",
    "Suzanne Chan",
    "James \"Logan\" Howlett",
    "Ororo Monroe"
  ];

  if (mutantes.indexOf("Lorna Sally Dane") !== -1) {

    return;
  } else {
    console.log("Lorna Sally Dane");
  }
  
  let mutantesString = "";
  for (let i = 0; i < mutantes.length; i++) {
    mutantesString += mutantes[i];
    if (i < mutantes.length - 1) {
      mutantesString += ", ";
    }
  }
  
  console.log(mutantesString);