// 2. Generate birth months for 50 individuals and group by the same month

function generateBirthMonths() {
    let birthMonthsMap = new Map();
    
    // Generate birth months for 50 individuals (between 1 to 12, representing months)
    for (let i = 0; i < 50; i++) {
      let month = Math.floor(Math.random() * 12) + 1;
  
      if (!birthMonthsMap.has(month)) {
        birthMonthsMap.set(month, []);
      }
  
      // Add individual to the corresponding month
      birthMonthsMap.get(month).push(`Person ${i + 1}`);
    }
  
    // Display individuals grouped by birth month
    birthMonthsMap.forEach((individuals, month) => {
      console.log(`Month ${month}: ${individuals.length} individuals`);
      console.log(individuals);
    });
  }
  
  generateBirthMonths();
  