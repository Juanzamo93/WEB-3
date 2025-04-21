const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM equipo', (err, customers) => {
      if (err) {
        res.json(err);
      }
      console.log(customers);
      res.render('customers', {
        data: customers
      });
    });
  });
}

controller.save  = (req, res) => {
  req.getConnection((err, conn) => {
    const data = req.body;
    conn.query('INSERT INTO equipo set ?', [data], (err, customer) => {
      if (err) {
        res.json(err);
      }
      res.redirect('/');
    });
  });
  
}

// Editar un registro

controller.edit = (req, res) => {
  const { id } = req.params; // Obtener el ID desde los parámetros de la URL
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM equipo WHERE id = ?', [id], (err, customer) => {
      res.render('customer_edit',{
        data: customer[0]
      });
    });
  });
};


controller.update = (req, res) => {
  const { id } = req.params; // Obtener el ID desde los parámetros de la URL
  const newCustomer = req.body; // Obtener los nuevos datos del formulario
  req.getConnection((err, conn) => {
    conn.query('UPDATE equipo set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
      res.redirect('/');
    });
  });
};  


    
 

// Eliminar un registro
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      return res.status(500).json({ error: 'Error en la conexión a la base de datos' });
    }
    conn.query('DELETE FROM equipo WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar datos:', err);
        return res.status(500).json({ error: 'Error al eliminar los datos' });
      }
      res.redirect('/');
    });
  });
};




module.exports = controller;