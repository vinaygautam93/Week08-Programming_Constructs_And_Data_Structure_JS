// 4. Sum of three integers that add to zero

function findTriplets(arr) {
    let triplets = [];
  
    // Iterate through all possible triplets
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            triplets.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
  
    console.log("Triplets that sum to zero: ", triplets);
  }
  
  findTriplets([-1, 0, 1, 2, -1, -4]);  // Example input
  