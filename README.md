# SolCrate
SolCrate is the Windows 10 design

## Scripting Language
HTML, JS, CSS, C(for BLE stuffs)

## Target Platform(s)
Release: Windows 8.1 mobile, Windows 10, Windows 10 mobile, 
Later: IE11, Chrome, FF

## UI
1. Hub layout with drop menus.
2. Readouts: battery level, solar input, load output
3. Pages: Input, Output, and HUB

issues: 
* Is it possible to toggle the load from the regulator to the inverter via bluetooth?
* Can we remotely switch battery banks? (i'm considering having two battery banks so while one is charging, the other one is in use)

## The Photovoltaic System
3 panels total

Panel 1: 13v 0.2ah, 26 cells placed in series
Panel 2: 13v 0.2ah, 26 cells placed in series
Panel 3: 13v 0.4ah, 52 cells placed in series

Each panel is wired in parallel to increase amps, whilst each cell inside it's panel is in series to increase volts.

Total output: 13v 0.8ah

Battery Bank: 4 batteries total each are 12v9ah, they are wired in parallel

solar charge controller: 12v max, overload and drain protection(this makes sure the batteries don't drain at night when the polarity on the panels reverse and also protect from overload on really sunny days)

panels are designed to stay above 12v on a cloudy day but also still remain under 19v's on real sunny days.

wires: 14 gauge wire from battery bank to regulator to wall outlet(and switch)
16 gauge wire running from panels to regulator. 

Inverter: 40w/h, 12v DC to 300w AC

System flow is like this:

Solar Array--->Regulator--->Battery Bank--->Regulator--->Inverter---switch---<outlet

## BLE Board and other BLE information:
-notice- totally unsure on what to do as far as developing this module.  I think i have a BLE borad somewhere in my shop, I have no idea on how to use it though.

## Themes
* Black 
* Neon Blue

## Naming this App
Still no clue on what to call it.  For now, SunCrate is what i came up with

## Release Information
* Fee: Free with product purchase
* Trial: N/A
* Release Date: TBA
