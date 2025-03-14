import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Top from './Top';
import Bottom from './Bottom';

function RobotCard({ robot, onSelect }) {

  return (
    <div> 
    <div
      className="table"
      style={{ cursor: 'pointer' }}
      onClick={onSelect}
    >
      

      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Modelo</th>
            <th scope="col">Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{robot.id}</td>
            <td>{robot.nombre}</td>
            <td>{robot.modelo}</td>
            <td>{robot.empresaFabricante}</td>
          </tr>
        </tbody>
        </table>
      </div>
      
      </div>
  );
}

// Crear un componente con esto:
function RobotDetail({ robot, role }) {
  const isAdmin = role.toLowerCase() === 'administrador';

  const [editableRobot, setEditableRobot] = useState({ ...robot });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableRobot({ ...editableRobot, [name]: value });
  };

  return (
    <div>
      <h4>{robot.nombre}</h4>
      <table className="table">
        <tbody>
          <tr>
            <td>
              {isAdmin ? (
                <img
                  src={editableRobot.imagen}
                  alt="Imagen del robot"
                  className="img-fluid"
                />
              ) : (
                <img
                  src={robot.imagen}
                  alt="Imagen del robot"
                  className="img-fluid"
                />
              )}
            </td>
          </tr>
          <tr>
            <th>Año de Fabricación</th>
            <td>{robot.añoFabricacion}</td>
          </tr>
          <tr>
            <th>Capacidad de Procesamiento: </th>
            <td>{robot.capacidadProcesamiento}</td>
          </tr>
          <tr>
            <th>Humor: </th>
            <td>{robot.humor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Home() {
  const location = useLocation();
  const role = location.state?.role || 'Usuario';

  const robots = [
    {
        "id": 1,
        "nombre": "Pedrito",
        "modelo": "PR-001",
        "empresaFabricante": "Robotico Corp",
        "añoFabricacion": 2023,
        "capacidadProcesamiento": "2.5 GHz",
        "humor": "Como un perrito pequeño, siempre buscando atención y moviendo su 'cola' robótica",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot1.png"
    },
    {
        "id": 2,
        "nombre": "IronChef",
        "modelo": "IC-3000",
        "empresaFabricante": "RoboCocina Inc.",
        "añoFabricacion": 2021,
        "capacidadProcesamiento": "3.2 GHz",
        "humor": "Fanático de la cocina, siempre bromeando con chistes de comida y recomendando recetas",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot2.png"
    },
    {
        "id": 3,
        "nombre": "Chispita",
        "modelo": "LT-007",
        "empresaFabricante": "SparkBots Ltd.",
        "añoFabricacion": 2020,
        "capacidadProcesamiento": "1.8 GHz",
        "humor": "Alegre y juguetón, con comportamiento como un gatito curioso",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot3.png"
    },
    {
        "id": 4,
        "nombre": "SeñorCalculín",
        "modelo": "MC-808",
        "empresaFabricante": "Mathematrix Solutions",
        "añoFabricacion": 2022,
        "capacidadProcesamiento": "4.0 GHz",
        "humor": "Serio pero sarcástico, con chistes de matemáticas",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot4.png"
    },
    {
        "id": 5,
        "nombre": "DoctoraBot",
        "modelo": "HL-9000",
        "empresaFabricante": "MediTech Industries",
        "añoFabricacion": 2024,
        "capacidadProcesamiento": "3.8 GHz",
        "humor": "Doctora estricta con humor seco, siempre recordando que te laves las manos",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot5.png"
    },
    {
        "id": 6,
        "nombre": "ZumbaTron",
        "modelo": "ZT-2025",
        "empresaFabricante": "DanceTech Co.",
        "añoFabricacion": 2025,
        "capacidadProcesamiento": "2.9 GHz",
        "humor": "Energético amante del baile, siempre motivando a moverse",
        "imagen": "https://github.com/fai-aher/T34-Wiki-Backup/blob/main/images/robot6.png"
    }
  ];

  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  const half = Math.ceil(robots.length / 2);
  const firstColumnRobots = robots.slice(0, half);
  const secondColumnRobots = robots.slice(half);

  return (

    <div className="container-fluid">
      <Top></Top>
      <div className="row">
        {}
        <div className="col-4">
          {firstColumnRobots.map((robot) => (
            <RobotCard 
              key={robot.modelo} 
              robot={robot} 
              onSelect={() => handleRobotClick(robot)} 
            />
          ))}
        </div>

        {}
        <div className="col-4">
          {secondColumnRobots.map((robot) => (
            <RobotCard 
              key={robot.modelo} 
              robot={robot} 
              onSelect={() => handleRobotClick(robot)} 
            />
          ))}
        </div>

        {}
        <div className="col-4">
          {selectedRobot ? (
            <RobotDetail robot={selectedRobot} role={role} />
          ) : (
            <p>Seleccionar un robot</p>
          )}
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default Home;
