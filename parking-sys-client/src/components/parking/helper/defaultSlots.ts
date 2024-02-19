import IParkngSlot from "../types/IParkingSlot";
import ParkingStates from "../types/ParkingStatesEnum";

const letters = ['A', 'B', 'C', 'D'];
const numbers = ['1', '2', '3', '4'];
const slotCodes = []

for (let letter of letters) {
  for (let number of numbers) {
    slotCodes.push(letter + number)
  }
}

const defaulltSlots: IParkngSlot[] = slotCodes.map((sc, index) => ({
    code: sc,
    coordinate: `${index},${index%4}`,
    status: ParkingStates.VACANT
}))

export default defaulltSlots;