import React, { useState } from 'react';
import styles from './ContactCard.module.css';
import user from '../../public/user.png';

export const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [editing, setEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({ ...props.contact });

  const handleUpdate = () => {
    props.updateContactHandler(id, updatedInfo);
    setEditing(false);
  };

  return (

    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={user} alt="user" width={40} />
        </div>
        {editing ? (
          <div className={styles.editForm}>
            <input
              type="text"
              value={updatedInfo.name}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
            />
            <input
              type="text"
              value={updatedInfo.email}
              onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) :
          (
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.email}>{email}</div>
            </div>
          )
        }
      </div>
      <div className={styles.right}>
        <i
          onClick={() => setEditing(true)}
          className="edit alternate outline icon"
        ></i>
        <i className="trash alternate outline icon"
          onClick={() => { props.clickHandler(id) }}
        ></i>
      </div>
    </div>
  )
}


//     <div className={styles.item}>
//       <div className={styles.content}>
//         <div className={styles.image}>
//           <img src={user} alt="user" width={40} />
//         </div>
//         {editing ? (
//           <div className={styles.editForm}>
//             <input
//               type="text"
//               value={updatedInfo.name}
//               onChange={(e) => setUpdatedInfo({ ...updatedInfo, name: e.target.value })}
//             />
//             <input
//               type="text"
//               value={updatedInfo.email}
//               onChange={(e) => setUpdatedInfo({ ...updatedInfo, email: e.target.value })}
//             />
//             <button onClick={handleUpdate}>Update</button>
//           </div>
//         ) : (
//           <div className={styles.info}>
//             <div className={styles.name}>{name}</div>
//             <div className={styles.email}>{email}</div>
//             <div className={styles.right}>
//               <i
//                 onClick={() => setEditing(true)}
//                 className="edit alternate outline icon blue"
//               ></i>
//               <i className="trash alternate outline icon"
//                 onClick={() => { props.clickHandler(id) }}
//               ></i>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
