let professores = [
    {
      id: '1',
      nome: 'Prof. Júlia',
      idade: 40,
      departamento: 'Matemática',
      turmas: [
        { codigo: '9A', disciplina: 'MAT101', alunos: ['João', 'Maria', 'Pedro'] },
        { codigo: '10A', disciplina: 'MAT201', alunos: ['Ana', 'Luiz'] }
      ]
    },
    {
      id: '2',
      nome: 'Profa. Melissa',
      idade: 35,
      departamento: 'História',
      turmas: [
        { codigo: '9A', disciplina: 'HIS101', alunos: ['João', 'Pedro'] },
        { codigo: '10B', disciplina: 'HIS201', alunos: ['Maria', 'Carlos', 'Luiza'] }
      ]
    },
    {
      id: '3',
      nome: 'Prof. Gabriel',
      idade: 30,
      departamento: 'TI',
      turmas: [
        { codigo: '9A', disciplina: 'TI101', alunos: ['João', 'Maria'] },
        { codigo: '9B', disciplina: 'TI101', alunos: ['Pedro', 'Luiz'] }
      ]
    },
    {
        id: '4',
        nome: 'Prof. Dani',
        idade: 30,
        departamento: 'Ciências',
        turmas: [
          { codigo: '9C', disciplina: 'CIE101', alunos: ['João', 'Maria'] },
          { codigo: '11A', disciplina: 'CIE101', alunos: ['Pedro', 'Luiz'] }
        ]
      }
  ]

  
  exports.listarProfessores = (req, res) => {
    res.json(professores)
  }
  
  exports.buscarPorId = (req, res) => {
    const professor = professores.find(p => p.id === req.params.id)
    if (!professor) return res.status(404).send('Id não existente')
    res.json(professor)
  }
  
  exports.listarTurmas = (req, res) => {
    const professor = professores.find(p => p.id === req.params.id)
    if (!professor) return res.status(404).send('Id não existente')
    res.json(professor.turmas)
  }
  
  exports.atualizarProfessor = (req, res) => {
    const index = professores.findIndex(p => p.id === req.params.id)
    if (index === -1) return res.status(404).send('Id não existente')
    professores[index] = { ...professores[index], ...req.body }
    res.json(professores[index])
  }
  
  exports.adicionarTurma = (req, res) => {
    const professor = professores.find(p => p.id === req.params.id)
    if (!professor) return res.status(404).send('Id não existente')
    professor.turmas.push(req.body)
    res.status(201).json(professor)
  }
  
  exports.listarPorDepartamento = (req, res) => {
    const filtrados = professores.filter(
      p => p.departamento.toLowerCase() === req.params.departamento.toLowerCase()
    )
    res.json(filtrados)
  }
  
  exports.removerProfessor = (req, res) => {
    const index = professores.findIndex(p => p.id === req.params.id)
    if (index === -1) return res.status(404).send('Id não existente')
    const removido = professores.splice(index, 1)
    res.json(removido[0])
  }
  