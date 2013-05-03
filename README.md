caramel-fonts
=============

MYSTU Web Front-End Font Submodule.

#### Build Fonts:
Currently forked from Google Font Subset script:
```shell
hg clone https://code.google.com/p/googlefontdirectory/
```
With hacked JS + Python code work together.   Currently under a very naive stage and not automated yet.

#### Build FontForge:
```Shell
git clone git@github.com:fontforge/fontforge.git
cd fontforge && ./configure --enable-pyextension
make
sudo make install
sudo make install_py
```

#### Fontello
Fontello is a good tool for icons:
http://fontello.com/
https://github.com/fontello/fontello
