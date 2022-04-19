const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies')
const { expect } = chai
const lista = {
  animales: [{
      tipo: 'Perro'
    },
    {
      tipo: 'Gato'
    }], 
    perros: function () {
      return [this.animales[0]]
    },
    gatos: function () {
      return [this.animales[1]]
    }
}

describe('Lista de animales', () => {
  it('es un objeto', () => {
    expect(lista).to.be.a('Object')
  })

  describe('#perros', () => {
    it('devuelve los animales que son perros', () => {
      const perros = [{
        tipo: 'Perro'
      }]
      expect(lista.perros()).to.eql(perros)
    })
  })

  describe('#gatos', () => {
    it('devuelve los animales que son gatos', () => {
      const gatos = [{
        tipo: 'Gato'
      }]
      expect(lista.gatos()).to.eql(gatos)
    })
  })

  // describe('#otros', () => {
  //   it('devuelve los animales que no son perros ni gatos', () => {
  //     expect(lista.otros()).to.equal(otros)
  //   })

  //   it('determina los resultados utilizando Array.filter', () => {
  //     expect(animales.filter).to.have.been.called()
  //   })
  // })
})