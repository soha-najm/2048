import styles from "@/styles/board.module.css";

function Board() {
  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellCounts = 16;

    for (let index = 0; index < totalCellCounts; index++) {
      cells.push(<div key={index} className={styles.cell}></div>);
    }
    return cells;
  };
  return (
    <div className={`${styles.board}`}>
      <div className={styles.grid}>{renderGrid()}</div>
    </div>
  );
}

export default Board;
