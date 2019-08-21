

export default data = async () => {
  let dataArr = [];
  let res = await fetch('http://localhost:3000/api/tanks');
  let jsonData = await res.json();
  
  dataArr.push(jsonData);

  return dataArr;
};


// export const data = [
//   {
//     title: 'West Tank',
//     transferPump: true,
//     volume: 1767.84,
//     on: 6,
//     off: 4,
//     alarmLevel: 12,
//     currentLevel: 4.17,
//   },
//   {
//     title: 'East Tank',
//     transferPump: true,
//     volume: 560.23,
//     on: 6,
//     off: 4,
//     alarmLevel: 12,
//     currentLevel: 7.17,
//   },
//   {
//     title: 'South Tank',
//     transferPump: false,
//     volume: 1360.46,
//     on: 6,
//     off: 4,
//     alarmLevel: 12,
//     currentLevel: 3.17,
//   },
//   {
//     title: 'North Tank',
//     transferPump: true,
//     volume: 1290.9,
//     on: 6,
//     off: 4,
//     alarmLevel: 12,
//     currentLevel: 10.17,
//   },
// ];

// data.push(apiData)