const Board = require('./board.model');

const boards = [];

const getAll = async () => boards;

const getById = async (id) => boards.find((x) => x.id === id);

const postBoard = async (board) => {
    const newBoard = new Board(board);
    boards.push(newBoard);
    return newBoard;
};

const putBoard = async (id, board) => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
      return undefined;
    }
  
    const { title, columns } = board;
    boards[index].title = title;
    columns.forEach((x) => {
        const i = boards[index].columns.findIndex((z) => z.id === x.id);
        if(i !== -1) {
            const { title: t, order } = x;
            boards[index].columns[i].title = t;
            boards[index].columns[i].order = order;
        }
    });

    return boards[index];
};
  
const deleteBoard = async (id) => {
    const index = boards.findIndex((x) => x.id === id);
    if(index === -1) {
        return undefined;
    }

    boards.splice(index, 1);
    return true;
};

module.exports = { getAll, getById, postBoard, deleteBoard, putBoard };