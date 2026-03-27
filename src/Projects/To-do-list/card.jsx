
function Card() {

return (
    <div className="Card">
      <input

       className="Enter"
       id="input_bar"
       type="text"
       placeholder="Enter Tasks"

       />


      <ul
      className="Tasks"
      id="Tasklist"

      >

        <li>gym</li>

      </ul>
    </div>
  );
}
export default Card;
