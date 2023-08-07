function organizeApples(
  apples,
  applesPerBox = 4,
  boxesPerPack = 2,
  packsPerFriend = 2
) {
  // Calculate the total number of apples, boxes, packs, and friends needed
  const totalApples = apples.length;
  const totalBoxes = Math.ceil(totalApples / applesPerBox);
  const totalPacks = Math.ceil(totalBoxes / boxesPerPack);
  const totalFriends = Math.ceil(totalPacks / packsPerFriend);

  // Initialize the output array to store the organized apples
  const output = [];
  let boxCounter = 0;
  let exit_loops = false;
  // Loop through each friend and create their packs of boxes
  for (let friend = 0; friend < totalFriends; friend++) {
    const friendPacks = [];
    // Loop through each pack and create their boxes
    for (let pack = 0; pack < packsPerFriend; pack++) {
    if (exit_loops) break;
      const packBoxes = [];
      // Loop through each box and add apples to them
      for (let box = 0; box < boxesPerPack; box++) {
        // Slice the array to get the apples for the current box
        const boxApples = apples.slice(
          boxCounter * applesPerBox,
          (boxCounter + 1) * applesPerBox
        );
        if (boxApples.length != 0) {
          boxCounter++;
          packBoxes.push(boxApples);
        } else {
          exit_loops = true;
          break;
        }
      }
      
      // Add the pack of boxes to the friend's packs
      if(packBoxes.length > 0)
      friendPacks.push(packBoxes);
    }
    // Add the friend's packs to the output
    output.push(friendPacks);
  }

  // Return the organized apples
  return output;
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const output = organizeApples(input);

// Output the result
console.log(output);
