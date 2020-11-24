export const nodes = [
    {id: 0,  fx: 20, fy: 20, name: "Home Node"},
    {id: 1,  fx: 20, fy: 20, name: "BIZ"},
    {id: 2,  fx: 20, fy: 20, name: "Revenue"},
    {id: 3,  fx: 20, fy: 20, name: "Strategy"},
    {id: 4,  fx: 20, fy: 20, name: "Objectives"},
    {id: 5,  fx: 20, fy: 20, name: "KPI"},
    {id: 6,  fx: 20, fy: 20, name: "Customer Value"},
    {id: 7,  fx: 20, fy: 20, name: "TECH"},
    {id: 8,  fx: 20, fy: 20, name: "Data Solutions"},
    {id: 9,  fx: 20, fy: 20, name: "UX/DX"},
    {id: 10, fx: 20, fy: 20, name: "Smart Apps"},
    {id: 11, fx: 20, fy: 20, name: "AI & Data Science"},
    {id: 12, fx: 20, fy: 20, name: "BI & Advanced Analytics"},
    {id: 13, fx: 20, fy: 20, name: "Digital Twins"},
    {id: 14, fx: 20, fy: 20, name: "Data Mgmt"},
    {id: 15, fx: 20, fy: 20, name: "Data Quality"},
    {id: 16, fx: 20, fy: 20, name: "Ref Data Mgmt"},
    {id: 17, fx: 20, fy: 20, name: "MDM"},
    {id: 18, fx: 20, fy: 20, name: "Meta Data Mgmt"},
    {id: 19, fx: 20, fy: 20, name: "IT Systems"},
    {id: 20, fx: 20, fy: 20, name: "Data Life-cycle"},
    {id: 21, fx: 20, fy: 20, name: "Platform"},
    {id: 22, fx: 20, fy: 20, name: "IoT"},
    {id: 23, fx: 20, fy: 20, name: "SW"},
    {id: 24, fx: 20, fy: 20, name: "Architechture"},
    {id: 25, fx: 20, fy: 20, name: "HW"},
    {id: 26, fx: 20, fy: 20, name: "Sources"},
    {id: 27, fx: 20, fy: 20, name: ""},
    {id: 28, fx: 20, fy: 20, name: "ORG"},
    {id: 29, fx: 20, fy: 20, name: "Competence"},
    {id: 30, fx: 20, fy: 20, name: "WoW"},
    {id: 31, fx: 20, fy: 20, name: "Teams"},
    {id: 32, fx: 20, fy: 20, name: "Process"},
    {id: 33, fx: 20, fy: 20, name: "Alignment"},
    {id: 34, fx: 20, fy: 20, name: ""}
]

export const links = [
    { target: 1, source: 0, distance: 50},
    { target: 2, source: 1, distance: 30},
    { target: 3, source: 1, distance: 30},
    { target: 4, source: 1, distance: 30},
    { target: 5, source: 1, distance: 30},
    { target: 6, source: 1, distance: 30},
    { target: 7, source: 0, distance: 50},
    { target: 8, source: 7, distance: 20},
    { target: 9, source: 8, distance: 30},
    { target: 10, source: 8, distance: 30},
    { target: 11, source: 8, distance: 30},
    { target: 12, source: 8, distance: 30},
    { target: 13, source: 8, distance: 30},
    { target: 14, source: 7, distance: 20},
    { target: 15, source: 14, distance: 30},
    { target: 16, source: 14, distance: 30},
    { target: 17, source: 14, distance: 30},
    { target: 18, source: 14, distance: 30},
    { target: 19, source: 14, distance: 30},
    { target: 20, source: 14, distance: 30},
    { target: 21, source: 7, distance: 20},
    { target: 22, source: 21, distance: 30},
    { target: 23, source: 21, distance: 30},
    { target: 24, source: 21, distance: 30},
    { target: 25, source: 21, distance: 30},
    { target: 26, source: 21, distance: 30},
    { target: 27, source: 21, distance: 30},
    { target: 28, source: 0, distance: 50},
    { target: 29, source: 28, distance: 30},
    { target: 30, source: 28, distance: 30},
    { target: 31, source: 28, distance: 30},
    { target: 32, source: 28, distance: 30},
    { target: 33, source: 28, distance: 30},
    { target: 34, source: 28, distance: 30},
]

export default {
    nodes,
    links,
  };