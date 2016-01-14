// for Java ScriptEngine(Rhino)

importPackage(java.lang)
importPackage(java.io)
importPackage(java.util)

var JString = java.lang.String
var toLong = Long.valueOf

function printInfo(file) {
  System.out.printf("%s%s%s%s------ %8d %s %s%n",
                    [file.isDirectory() ? "d" : "-",
                     file.canRead()     ? "r" : " ",
                     file.canWrite()    ? "w" : " ",
                     file.canExecute()  ? "x" : " ",
                     toLong(file.length()),
                     JString.format("%1$tF %1$tT",
                                    [toLong(file.lastModified())]),
                     file.name])
}

var paths = (arguments.length == 0)
          ? ((new File(".")).list() || [])
          : arguments
for (var i = 0; i < paths.length; i++)
  printInfo(new File(paths[i]))
