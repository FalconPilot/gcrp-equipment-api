const router = require('express').Router()

const weapons = {
  algeria: {
    rifles: {
      ali_b1: {
        name: 'Ali B1'
      }
    },
    cannons: {
      kamel_99_75: {
        name: 'Kamel 99-75'
      }
    }
  },
  poland: {
    rifles: {
      aw_m1900: {
        name: 'AW M1900'
      }
    }
  }
}

const selectWeapons = (req, res, next) => {
  const selectedWeapons = weapons[req.params.country]
  if (selectedWeapons) {
    req.weapons = selectedWeapons
    next()
  } else {
    res.status(404).send(`Country ${req.params.country} does not exist`)
  }
}

const selectWeaponType = (req, res, next) => {
  const selectedWeapons = req.weapons[req.params.wtype]
  if (selectedWeapons) {
    req.weapons = selectedWeapons
    next()
  } else {
    res.status(404).send(`Weapon type ${req.params.wtype} does not exist`)
  }
}

router.get('/', (req, res) => {
  res.status(200).json(weapons)
})

// Return weapons by country
router.get('/:country',
  selectWeapons,
  (req, res) => {
    res.status(200).json(req.weapons)
  }
)

// Return weapons by country and type
router.get('/:country/:wtype',
  selectWeapons,
  selectWeaponType,
  (req, res) => {
    res.status(200).json(req.weapons)
  }
)

module.exports = router
