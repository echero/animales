const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies')
const { ALL } = require('dns')
const { expect } = chai
const lista = {
  animales: [{
      tipo: 'Perro'
    },
    {
      tipo: 'Gato'
    },
    {
      tipo: 'Iguana'
    }], 
    perros: function () {
      return this.animales.filter(animal => animal.tipo == 'Perro')
    },
    gatos: function () {
      return this.animales.filter(animal => animal.tipo == 'Gato')
    },
    otros: function () {
      return this.animales.filter(animal => (animal.tipo != 'Perro' && animal.tipo != 'Gato'))
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

  describe('#otros', () => {
    it('devuelve los animales que no son perros ni gatos', () => {
      const otros = [{
        tipo: 'Iguana'
      }]
      expect(lista.otros()).to.eql(otros)
    })
  })

    it('determina los resultados utilizando Array.filter', () => {
      expect(lista.animales.filter()).to.have.been.called()
    })
})